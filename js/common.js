class CommonFunction {
    static GetPageName(url) {
        return window.location.search.split('?page=')[1] + '.html'
    };

    static RenderPage(){
        var template = CommonFunction.GetPageName('page');
        $.get(template, function (data) {
            $($('body').find('content')).html(data)
        }, 'text');
    }
    
    static RenderTagElement(tagName){
        $.get(tagName + '.component', function (data) {
            $($('body').find(tagName)).html(data)
        }, 'text');
    }
}

$(document).ready(function () {
    CommonFunction.RenderPage();
    CommonFunction.RenderTagElement('menu');
});