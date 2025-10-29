//First question to user, filter from dataset to list1.
Write "Do you prefer hot or cold cereals for breakfast?" 
Read typePref 
Set list1 to empty 
FOR each cereal IN cereals 
    IF cereal.type == typePref 
    ADD cereal TO list1 
END FOR 
Set remaining = count(list1) 
Write "After chosing {typePref} cereals, {remaining} options remain."

//Second question to user, filter from list1 to list2
Write "How important is your calory intake for you? Please answer by writing: important, matters or not important" 
Read calPref 
IF calPref = "important" 
    set maxCalories 320 
ELSE IF calPref ="matters" 
    set maxCalories 380 
ELSE set maxCalories 9999 
set list2 to empty 
FOR each cereal in list1 
 IF cereal.calories <= maxCalories 
 ADD cereal TO list2 
END FOR 
Set remaining = count(list2) 
Write "After this choice you have {remaining} cereals left."

//Third question to user, filter from list2 to list3
Write "Would you say that you have a sweet tooth? i.e should your cereals be sweet? Yes/No" 
Read sweetTooth 
Set list3 empty 
IF sweetTooth = "yes" 
    FOR each cereal in list2 
        IF cereal.sugar >20 
        ADD cereal TO list3 
    END FOR 
ELSE 
    FOR each cereal in list2 
        IF cereal.sugar <=20 
        ADD cereal TO list3 
    END FOR 
Set remaining = count(list3) 
Write "You have now reached the final step and have {remaining} cereals left."

//Fourth question to user, creates finalList from list3, sorted by fiber if the user answers yes
Write "Is fiber important to you?"
Read fiberPref
Set finalList = list3
IF fiberPref = "yes"
    SORT finalList BY fiber DESCENDING
END IF

//Show popupbox (with brand information when clicking on object in list of suggested cereals)
FUNCTION showPopupbox(cereal)
FUNCTION closePopupbox()
Write “Here are your final results. For more information about the cereal please click on cereal of interest”
FOR each cereal IN finalList 
    ADD popup
    WRITE cereal.name
    Write in popup box cereal.name "-" cereal.mnf "Calories per 100g:" cereal.calories "Protein(g) per 100g:" cereal.protein "Fat (g) per 100g: cereal.fat "Sodium (mg) per 100g:" cereal.sodium "Fiber (g) per 100g:" cereal.fiber "Carbohydrates (g) per 100g:" cereal.carbo "Sugar (g) per 100g:" cereal.sugar "Potassium (mg) per 100g" cereal.potass
    WAIT for user to click a cereal.name = READ clickCereal
    WAIT for user to close a popupbox = READ clickX
    IF clickCereal = DISPLAY related popupbox THEN
    IF clickX = CLOSE popupbox 
    ELSE don’t show popupbox
END FOR

