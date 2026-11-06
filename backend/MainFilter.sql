create or replace function RunFilter(food text, spark text, transport text, service text, second_lang text)
  returns setof text
  language plpgsql STABLE
  as
$$
begin

if (spark = 'Yes') then
    if (transport = 'Yes') then
        if (service = 'Default') then
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and provision_of_transport='Yes' and "spark_certified"='Yes';
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' and provision_of_transport='Yes' and "spark_certified"='Yes';
                end if;
            end if;
        else
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' and "service"=service and provision_of_transport='Yes' and "spark_certified"='Yes';
                end if;
            end if;
        end if;
    else
        if (service = 'Default') then
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and "spark_certified"='Yes';
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' and "spark_certified"='Yes';
                end if;
            end if;
        else
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and "service"=service and "spark_certified"='Yes';
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' and "service"=service and "spark_certified"='Yes';
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' and "service"=service and "spark_certified"='Yes';
                end if;
            end if;
        end if;
    end if;
else
    if (transport = 'Yes') then
        if (service = 'Default') then
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and provision_of_transport='Yes' ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and provision_of_transport='Yes' ;
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' and provision_of_transport='Yes' ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' and provision_of_transport='Yes' ;
                end if;
            end if;
        else
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and "service"=service and provision_of_transport='Yes' ;
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' and "service"=service and provision_of_transport='Yes' ;
                end if;
            end if;
        end if;
    else
        if (service = 'Default') then
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true ;
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' ;
                end if;
            end if;
        else
            if (food = 'Default') then
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and "service"=service ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and "service"=service ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and "service"=service ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and "service"=service ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and "service"=service ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and "service"=service ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and "service"=service ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and "service"=service ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and "service"=service ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and "service"=service ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and "service"=service ;
                end if;
            else
                if (second_lang = 'Chinese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Chinese" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Malay') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Malay" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Tamil') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Tamil" = true and food='food' and "service"=service ;
                elsif (second_lang = 'French') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_French" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Arabic') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Arabic" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Russian') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Russian" = true and food='food' and "service"=service ;
                elsif (second_lang = 'German') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_German" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Japanese') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Japanese" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Hindi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Hindi" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Korean') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Korean" = true and food='food' and "service"=service ;
                elsif (second_lang = 'Punjabi') then
                    return query select distinct(centre_code) from "PreSchool" as f where "Lang_Punjabi" = true and food='food' and "service"=service ;
                end if;
            end if;
        end if;
    end if;
end if;

end;
$$;
