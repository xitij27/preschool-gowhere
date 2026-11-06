import sys
 
# Printing the Output to output.txt file
sys.stdout = open('output.txt', 'w')

for spark in ['Yes', 'Default']: 
    if(spark == 'Yes'):
        print('if (spark = \'Yes\') then')
    else:
        print('else')
    for transport in ['Yes', 'Default']:
        if transport == 'Yes':
            print('    if (transport = \'Yes\') then')
        else:
            print('    else')
        for service in ['Default', 'service']:
            if(service == 'Default'):
                print('        if (service = \'Default\') then')
            else:
                print('        else')
            for food in ['Default', 'food']:
                if(food == 'Default'):
                    print('            if (food = \'Default\') then')
                else:
                    print('            else')
                for second_lang in ['Chinese', 'Malay', 'Tamil', 'French', 'Arabic', 'Russian', 'German', 'Japanese', 'Hindi', 'Korean', 'Punjabi']:
                    if (second_lang == 'Chinese'):
                        print('                if (second_lang = \'Chinese\') then')
                    else:
                        print(('                elsif (second_lang = \'' + second_lang + '\') then'))
                    print('                    return query select ps.centre_code, c.latitude, c.longitude from \"PreSchool\" ps, \"Fees\" f, \"Coords\" c ', end='')
                    print('where f.centre_code = ps.centre_code and ps.centre_code = c.centre_code ', end='')
                    print('and \"Lang_'+ second_lang+ '\" = true ', end='')
                    if(food != 'Default'):
                        print('and ps.food=\''+ food+ '\' ', end='')
                    if(service != 'Default'):
                        print('and ps.service=service ', end='')
                    if(transport != 'Default'):
                        print('and ps.provision_of_transport=\''+ transport+ '\' ', end='')
                    if(spark != 'Default'):
                        print('and \"spark_certified\"=\''+ spark+ '\'', end='')
                    print(' and (((c.latitude - user_lat)*(c.latitude - user_lat)) + ((c.longitude - user_long)*(c.longitude - user_long)) <= (distance*distance/10000)) ', end='')
                    print(' and f.fees <= max_fee and f.fees >= min_fee and f.type_of_citizenship = citizenship and f.levels_offered = level and f.type_of_service = type_service', end = '')
                    print(';')
                    if(second_lang == 'Punjabi'):
                        print('                end if;')
                if(food == 'food'):
                    print('            end if;')
            if(service == 'service'):
                print('        end if;')
        if(transport == 'Default'):
            print('    end if;')
    if(spark == 'Default'):
        print('end if;')

                    