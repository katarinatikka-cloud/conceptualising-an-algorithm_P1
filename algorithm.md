//First question to user, filter from dataset to list1.
Write "Do you prefer hot or cold cereals for breakfast?" 
Read typePref 
IF (typePref = "cold") set typePref to "C" 
ELSE set typePref to "H"
Set list1 to empty 
FOR each cereal IN cereals 
    IF cereal.type == typePref 
    ADD cereal TO list1 
END FOR 
Set remaining = count(list1) 
IF (typePref = "C") set typePref to "cold" 
ELSE set typePref to "hot"
Write "After chosing {typePref} cereals, {remaining} options remain."

//Second question to user, filter from list1 to list2
Write "How important is it that your calory intake is low? Please answer by writing: important, matters or not important" 
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

//Safety measure if the list should become empty go back to previous list
IF count(list2) = 0 
 Write "Ooops, no cereals match your criteria. Let's go back one step and try a broader filter." 
 Set list2 = list1 
 set remaining = count(list2) 
 Write "You are back at having {remaining} cereals left." 
ELSE 
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

//Safety measure if the list should become empty go back to previous list
IF count(list3) = 0 
Write "Ooops, no cereals match your criteria. Let's go back one step and try a broader filter." 
Set list3 = list2 
set remaining = count(list3) 
Write "You are back at having {remaining} cereals left." 
ELSE 
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
    IF (mrf = "K") set mrf to "Kelloggs" 
    ELSE IF (mrf = "A") set mrf to "American Home Food Products"
    ELSE IF (mrf = "G") set mrf to "General Mills"
    ELSE IF (mrf = "N") set mrf to "Nabisco"
    ELSE IF (mrf = "P") set mrf to "Post"
    ELSE IF (mrf = "Q") set mrf to "Qaker Oats"
    ELSE IF (mrf = "R") set mrf to "Ralston Purina"
    ELSE set mrf to "unknown"
    WRITE cereal.name " by " cereal.mrf
    ADD popup
    Write in popup box cereal.name " by " cereal.mfr " Calories per 100g:" cereal.calories ", Protein(g) per 100g:" cereal.protein ", Fat (g) per 100g: cereal.fat ", Sodium (mg) per 100g:" cereal.sodium ", Fiber (g) per 100g:" cereal.fiber ", Carbohydrates (g) per 100g:" cereal.carbo ", Sugar (g) per 100g:" cereal.sugar ", Potassium (mg) per 100g" cereal.potass
    WAIT for user to click a cereal.name = READ clickCereal
    WAIT for user to close a popupbox = READ clickX
    IF clickCereal = DISPLAY related popupbox THEN
    IF clickX = CLOSE popupbox 
    ELSE don’t show popupbox
END FOR