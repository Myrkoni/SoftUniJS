function songs(arr){
    class song {
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time
        }
    }

    for(let i = 1; i <= arr[0]; i++){
        let [type, name, time] = arr[i].split("_");
        let newSong = new song(type, name, time);
        
        if(arr[arr.length - 1] === "all"){
            console.log(name);
        }else if(type === arr[arr.length - 1]){
            console.log(name)
        }   
    }  
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )