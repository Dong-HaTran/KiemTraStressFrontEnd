$(document).ready(function () {

    var arrayOfObjects = [{
              "Index": 1,
              "QuestionType": "A",
              "QuestionDescription": "Tôi thấy mình hay bối rối trước những việc chẳng đâu vào đâu"
          },
          {
              "Index": 2,
              "QuestionType": "B",
              "QuestionDescription": "Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)"
          },
      ];
  
    CommonFunction.RenderData(arrayOfObjects,'QuestionTest','tableQuestionTest')
  });



