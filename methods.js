function giveItem(e,item,amount){
    var item = e.npc.world.createItem(item, 0, amount||1);
    e.npc.giveItem(e.player, item);
}

function setName(e,name){
    e.npc.setName(name)
}

function getData(e,name){
    return e.getStoreddata(name)
}