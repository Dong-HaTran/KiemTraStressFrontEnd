class CommonFunction {

    static URL_API = "http://localhost:64598/";

    static RenderPage() {
        var template = 'pages/' + window.location.search.split('?page=')[1] + '.html'
        $.get(template, function (data) {
            $($('body').find('content')).html(data)
        }, 'text');
    }

    static RenderTagElement(tagName) {
        $.get('components/' + tagName + '.component', function (data) {
            $($('body').find(tagName)).html(data)
        }, 'text');
    }

    static RenderData(dataSource, componentTemplate, renderAt) {
        
        $.get('components/' + componentTemplate + '.component', function (data) {
            
            if(dataSource.length==0) return;

            var propertyNames = Object.keys(dataSource[0]);    
            var stringBuilding='';
          
            for (let i = 0; i < dataSource.length; i++) {
                const item = dataSource[i];
                var htmlComponent = data;
                propertyNames.forEach(property => {
                    htmlComponent = htmlComponent.replace(new RegExp('{{' + property +'}}', 'g'),item[property])
                });
                
                stringBuilding +=htmlComponent;
            }

            $('#'+renderAt).html(stringBuilding);

        }, 'text');
    }
}

$(document).ready(function () {
    jQuery.ajaxSetup({
        async: false
    });
    CommonFunction.RenderPage();
    CommonFunction.RenderTagElement('menu');
});