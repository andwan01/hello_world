

let t = ()=>{
    console.log("test");
};

let utilityModule =(()=>{
    let dateCreated = new Date();

    let getInfo = ()=>{
        console.log(`Created on ${dateCreated}`);
    };

    return {
        getInfo: getInfo
    };
})();

utilityModule.getInfo();

