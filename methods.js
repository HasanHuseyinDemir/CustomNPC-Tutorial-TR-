function createItem(e,item,amount,damage){
    return e.player.world.createItem(item,damage||0,amount||1)
}

function giveItem(e,item,amount){
    var item = createItem(e,"minecraft:diamond",amount||1)
    e.npc.giveItem(e.player, item);
}

function setName(e,name){
    e.npc.setName(name)
}

function getData(e,n){
    return e.getStoreddata().get(n)
}

function setData(e,n,s){
    e.setStoreddata().put(n,s)
}

function broadcast(e,m){
    e.player.world.broadcast(m)
}

function msgAlias(e,msg){
    return "<"+e.player.name+"> "+msg
}

function heldItem(e){
    e.getHeldItem().name
}