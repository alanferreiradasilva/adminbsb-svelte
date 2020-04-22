<script>
    export let ico = '';
    export let icoClass = '';
    export let text = '';
    export let dataFrom = 0;
    export let dataTo = 0;
    export let dataSpeed = 0;
    export let dataFreshInterval = 0;
    export let label = '';

    let counter = 0;
    let intervalId = null;
    const icoCssClass = 'icon ' + icoClass;

    function runCounter(from, to, interval){
        counter = from;
        intervalId = setInterval(() => {
            if(counter < to){
                counter++;
            } else{
                clearInterval(intervalId);
            }
        }, interval);
    }

    if(label && parseInt(label) != NaN){
        runCounter(dataFrom, parseInt(label), dataFreshInterval); 
    } else if(dataTo && parseInt(dataTo) != NaN){
        runCounter(dataFrom, parseInt(dataTo), dataFreshInterval); 
    }    

</script>

<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div class="info-box">
        <div class={icoCssClass}>
            <i class="material-icons">{ico}</i>
        </div>
        <div class="content">
            <div class="text">{text}</div>
            <div class="number count-to" 
                data-from={dataFrom} 
                data-to={dataTo} 
                data-speed={dataSpeed} 
                data-fresh-interval={dataFreshInterval}>
                {counter}
            </div>
        </div>
    </div>
</div>

<style>

</style>
