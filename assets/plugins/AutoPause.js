class AutoPause{
    constructor(){
        this.threshold =.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
    }


    run(player)
    {
        this.player = player;
       const config = {
            threshold: this.threshold
        };

        const observer = new IntersectionObserver(this.handlerIntersection, config);
        observer.observe(player.media);
    }

    handlerIntersection(entries) {
        const entry = entries[0];
        console.log(entry);
        const isVisible = entry.intersectionRatio >= this.threshold;
        if(isVisible) {this.player.play();}
        else {this.player.pause();}
    }
}

export default AutoPause;