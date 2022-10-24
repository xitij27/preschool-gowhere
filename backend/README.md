# Different Database Functions
## 1) runmegafilter / runmegafilteremail
Both these functions have the same input but return different values
### Parameters
This is a list containing the parameters and the possible inputs for each of them
1) food : ["No Pork No Lard with No Beef (without Certification from MUIS but from Halal Sources)",
       "No Pork No Lard with No Beef (from Non-Halal Sources)",
       "Halal Food With No Beef (with Certification from MUIS)",
       "No Pork No Lard with Beef (without Certification from MUIS but from Halal Sources)",
       "Others", "No Pork No Lard with Beef (from Non-Halal Sources)",
       "Halal Food With Beef (with Certification from MUIS)",
       "Vegetarian", "Default"]  
2) spark : ["Yes", "Default"]  
3) transport : ["Yes", "Default"]  
4) service : ["CC", "KN", "EYC-DS", "DS", "EYC", "Default"]  
5) second_lang : ["Chinese", "Malay", "Tamil", "French", "Arabic", "Russian", "German", "Japanese", "Hindi", "Korean", "Punjabi"]  
6) citizenship : ["SC", "SPR", "Others"]   
7) level : ["Infant (2 to 18 mths)", "Pre-Nursery (3 yrs old)", "Nursery (4 yrs old)", "Playgroup (18 mths to 2 yrs old)", "Kindergarten 1 (5 yrs old)", "Kindergarten 2 (6 yrs old)"]   
8) max_fee : (int)  
9) min_fee : (int)  
10) type_service : ["Full Day", "FEP PM", "FEP AM", "Session 1", "Session 2", "Emergency Care", "Flexi Care 1", "Half Day AM", "Half Day PM", "Flexi Care 2", "Flexi Care 3"]   
11) user_lat : Latitude of user   
12) user_long : Longitude of user  
13) distance : distance (in km) that user wants to travel

### Client API
```
let { data, error } = await supabase
  .rpc('runmegafilter', {
    citizenship, 
    distance, 
    food, 
    level, 
    max_fee, 
    min_fee, 
    second_lang, 
    service, 
    spark, 
    transport, 
    type_service, 
    user_lat, 
    user_long
  })
```

## 2) runfilter
### Parameters
This is a list containing the parameters and the possible inputs for each of them
1) food : ["No Pork No Lard with No Beef (without Certification from MUIS but from Halal Sources)",
       "No Pork No Lard with No Beef (from Non-Halal Sources)",
       "Halal Food With No Beef (with Certification from MUIS)",
       "No Pork No Lard with Beef (without Certification from MUIS but from Halal Sources)",
       "Others", "No Pork No Lard with Beef (from Non-Halal Sources)",
       "Halal Food With Beef (with Certification from MUIS)",
       "Vegetarian", "Default"]  
2) spark : ["Yes", "Default"]  
3) transport : ["Yes", "Default"]  
4) service : ["CC", "KN", "EYC-DS", "DS", "EYC", "Default"]  
5) second_lang : ["Chinese", "Malay", "Tamil", "French", "Arabic", "Russian", "German", "Japanese", "Hindi", "Korean", "Punjabi"]  

### Client API
```
let { data, error } = await supabase
  .rpc('runfilter', {
    food,
    second_lang,
    service,
    spark,
    transport
  })
  ```
  
## 3) filterfees
### Parameters
This is a list containing the parameters and the possible inputs for each of them
  1) citizenship : ["SC", "SPR", "Others"]   
  2) level : ["Infant (2 to 18 mths)", "Pre-Nursery (3 yrs old)", "Nursery (4 yrs old)", "Playgroup (18 mths to 2 yrs old)", "Kindergarten 1 (5 yrs old)", "Kindergarten 2 (6 yrs old)"]   
  3) max_fee : (int)  
  4) min_fee : (int)  
  5) service : ["Full Day", "FEP PM", "FEP AM", "Session 1", "Session 2", "Emergency Care", "Flexi Care 1", "Half Day AM", "Half Day PM", "Flexi Care 2", "Flexi Care 3"]   
  
 ### Client API
 ```
 let { data, error } = await supabase
  .rpc('filterfees', {
    citizenship, 
    level, 
    max_fee, 
    min_fee, 
    service
  })
 ```
 
## 4) signup 
### Parameters
1) email : (To be verified in node using an otp)
2) password : (To be hashed from the frontend itself)
### Client API
```
let { data, error } = await supabase
  .rpc('signup', {
    email, 
    password
  })
```

## 5) login 
### Parameters
1) user_email
2) user_password : (To be hashed from the frontend itself)
### Returns
The email if the password is correct and NULL if the password is incorrect
### Client API
```
let { data, error } = await supabase
  .rpc('signup', {
    user_email, 
    user_password
  })
```

## 6) updatepassword
### Parameters
1) user_email
2) user_password : (To be hashed from the frontend itself) (new)
### Client API
```
let { data, error } = await supabase
  .rpc('updatepassword', {
    user_email, 
    user_password
  })
```

## 7) updatebookmark
### Parameters
1) user_email
2) user_bookmark : (json string)
### Client API
```
let { data, error } = await supabase
  .rpc('updatebookmark', {
    user_bookmark, 
    user_email
  })

if (error) console.error(error)
else console.log(data)
```

# TODO
1) ContactDetails (For sending emails)
  
