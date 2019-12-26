var arrayOfObjects;
$(document).ready(function () {
    LoadForm();
});

function LoadForm() {
    $.ajax({
        type: "GET",
        url: CommonFunction.URL_API + "GetQuestionSets",
        crossDomain: true,
        dataType: "json"
    }).done(function (data) {

        $("#ddlQuestionSet").empty();
        for (var i = 0; i < data.length; i++) {
            var id = data[i]['QuestionSetId'];
            var name = data[i]['SetName'];

            $("#ddlQuestionSet").append("<option value='" + id + "'>" + name + "</option>");
        }

        $("#ddlQuestionSet").val($("#ddlQuestionSet option:eq(1)").val());
    })

    $('PatientBOD')
}

function LoadQuestion() {
    $.ajax({
        type: "GET",
        url: CommonFunction.URL_API + "GetQuestionsByQuestionSetId" +
            "?questionSetId=" + $("#ddlQuestionSet").val(),
        crossDomain: true,
        dataType: "json"
    }).done(function (data) {
        CommonFunction.tableQuestionTest = data;
        CommonFunction.RenderData(data, 'QuestionForExamines', 'tableQuestionTest')
    })
}

function Save() {
    if (Valid()) {

        var examineData={};
        examineData.PatientName = 'Dong 1';
        examineData.PatientAddress='Dien Bien Phu';

        $.ajax({
            type: "POST",
            url: CommonFunction.URL_API + "SubmitExamine",
            crossDomain: true,
            data: 
            {
                examine: examineData,
                questions: CommonFunction.tableQuestionTest
            },
            dataType: "json"
        }).done(function (data) {
            alert('Bài kiểm tra đã xong. Vui lòng gặp bác sĩ để lấy tư vấn')
        })
    }
}

function Valid() {
    var isValid = true;
    for (let i = 0; i < CommonFunction.tableQuestionTest.length; i++) {
        const element = CommonFunction.tableQuestionTest[i];
        var value = $('#ddlAnswer_' + element.QuestionId).val();
        if (value == null) {
            isValid = false;
            $('#AnswerRequired_' + element.QuestionId).show();
        } else {
            element.PointSelected = value;
        }
    }

    return isValid;
}