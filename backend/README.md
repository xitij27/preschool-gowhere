# Different Database Functions
## 1) runfilter
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
  
## 2) filterfees
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
 
 # TODO
 1) Distance check (Maybe use Manhatten Distance ?)  
 2) ContactDetails (For sending emails)
 3) Account Database (For a login system and data collection)
  
