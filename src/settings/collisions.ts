FullScreenMario.FullScreenMario.settings.collisions = {
    "groupNames": ["Solid", "Character"],
    "keyGroupName": "groupType",
    "globalCheckGenerators": {
        //@ts-ignore
        "Character": FullScreenMario.FullScreenMario.prototype.generateCanThingCollide,
        //@ts-ignore
        "Solid": FullScreenMario.FullScreenMario.prototype.generateCanThingCollide
    },
    "hitCheckGenerators": {
        "Character": {
            "Character": FullScreenMario.FullScreenMario.prototype.generateIsCharacterTouchingCharacter,
            "Solid": FullScreenMario.FullScreenMario.prototype.generateIsCharacterTouchingSolid
        }
    },
    "hitFunctionGenerators": {
        "Character": {
            "Solid": FullScreenMario.FullScreenMario.prototype.generateHitCharacterSolid,
            "Character": FullScreenMario.FullScreenMario.prototype.generateHitCharacterCharacter
        }
    }
};
