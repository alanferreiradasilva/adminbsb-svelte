<script>
    export let model = {
        ico: '',
        bgClass: '',
        text: '',
        dataFrom: 0,
        dataTo: 0,
        dataSpeed: 0,
        dataFreshInterval: 0,
        label: ''
    };

    let counter = 0;
    let intervalId = null;
    const bgCssClass = 'info-box ' + model.bgClass;

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

    if(model.label && parseInt(model.label) != NaN){
        runCounter(model.dataFrom, parseInt(model.label), model.dataFreshInterval); 
    } else if(model.dataTo && parseInt(model.dataTo) != NaN){
        runCounter(model.dataFrom, parseInt(model.dataTo), model.dataFreshInterval); 
    }    

</script>

<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div class={bgCssClass}>
        <div class="icon">
            <i class="material-icons">{model.ico}</i>
        </div>
        <div class="content">
            <div class="text">{model.text}</div>
            <div class="number count-to" 
                data-from={model.dataFrom} 
                data-to={model.dataTo} 
                data-speed={model.dataSpeed} 
                data-fresh-interval={model.dataFreshInterval}>
                {counter}
            </div>
        </div>
    </div>
</div>

<style>

</style>
