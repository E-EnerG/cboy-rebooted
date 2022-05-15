function LoadSettings_1 () {
    blockSettings.writeString("Cboy_Dialog_Frame", "Transparent")
    blockSettings.writeString("Cboy_Dialog_Cursor", "Transparent")
    blockSettings.writeString("Cboy_Dialog_TextColor", "White")
}
function LoadSettings_2 () {
    blockSettings.writeString("Setting_Tilemap", "#01")
    blockSettings.writeString("Setup_text", "Cboy Setup")
    blockSettings.writeString("Background_White", "White")
    blockSettings.writeString("Background_Gray", "Gray")
    blockSettings.writeString("Background_Black", "Black")
    blockSettings.writeString("Background_Maroon", "Maroon")
    blockSettings.writeString("Background_Red", "Red")
    blockSettings.writeString("Background_Orange", "Orange")
    blockSettings.writeString("Background_Yellow", "Yellow")
    blockSettings.writeString("Background_Lime", "Lime")
    blockSettings.writeString("Background_Green", "Green")
    blockSettings.writeString("Background_Cyan", "Cyan")
    blockSettings.writeString("Background_Blue", "Blue")
    blockSettings.writeString("Background_Purple", "Purple")
    blockSettings.writeString("Background_Lavender", "Lavender")
    blockSettings.writeString("Background_Pink", "Pink")
}
function Begin_Setup_Stage1 () {
    if (blockSettings.exists("Cboy_Dialog_Frame")) {
        game.setDialogFrame(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `)
    }
    if (blockSettings.exists("Cboy_Dialog_Cursor")) {
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (blockSettings.exists("Cboy_Dialog_TextColor")) {
        game.setDialogTextColor(1)
    }
    game.showLongText("Hold Tight, We're Loading in the Files To begin Setup!", DialogLayout.Center)
    LoadSettings_2()
    if (blockSettings.exists("Background_Gray")) {
        scene.setBackgroundColor(2)
    } else {
        blockSettings.writeString("Background_Gray", "Gray")
    }
    if (blockSettings.exists("Setting_Tilemap")) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
    if (blockSettings.exists("Setup_text")) {
        textSprite = textsprite.create("Cboy Setup", 0, 2)
        textSprite.setPosition(32, 7)
        textSprite2 = textsprite.create("Setup File Not Found", 0, 3)
        textSprite2.setPosition(62, 27)
    }
}
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
LoadSettings_1()
Begin_Setup_Stage1()
LoadSettings_2()
