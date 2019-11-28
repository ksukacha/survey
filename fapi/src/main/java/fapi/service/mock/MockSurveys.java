//package fapi.service.mock;
//
//
//import fapi.models.AnswerModel;
//import fapi.models.QuestionModel;
//import fapi.models.SurveyModel;
//import fapi.models.UserModel;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
//public class MockSurveys {
//
//  private static List<SurveyModel> mockUserSurveyList = new ArrayList<>(Arrays.asList(
//    new SurveyModel(0, "Fruits", "survey about fruits", 1574640000L,
//     "john1994",
//      new ArrayList<QuestionModel>(Arrays.asList(
//        new QuestionModel("What is the yummiest fruit to you?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("apple"), new AnswerModel("orange"), new AnswerModel("pear")
//          ))),
//        new QuestionModel("How often do you eat fruits?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("never"), new AnswerModel("once a week"), new AnswerModel("several times a week"), new AnswerModel("none of the above")
//          ))),
//        new QuestionModel("Do you like fresh-made fruit juice?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("yes"), new AnswerModel("no")
//          )))
//      ))),
//    new SurveyModel(1, "Coffee", "survey about coffee", 1550102400L,
//      "john1994",
//      new ArrayList<QuestionModel>(Arrays.asList(
//        new QuestionModel("Do you drink coffee?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("yes"), new AnswerModel("no")
//          ))),
//        new QuestionModel("Which are your favourite coffee types?", "multiple-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("latte"), new AnswerModel("espresso"), new AnswerModel("cappuccino"), new AnswerModel("americano")
//          )))
//      ))),
//    new SurveyModel(2, "Study", "survey about studies", 1548806400L,
//      "liss-kudrow",
//      new ArrayList<QuestionModel>(Arrays.asList(
//        new QuestionModel("Are you currently studying at university?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("yes"), new AnswerModel("no")
//          ))),
//        new QuestionModel("What is your are of studying?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("Economics"), new AnswerModel("Technologies"), new AnswerModel("Linguistics"), new AnswerModel("Law"),
//            new AnswerModel("Pedagogics"), new AnswerModel("Music"), new AnswerModel("none of the above")
//          )))
//      ))),
//    new SurveyModel(3, "Day schedule", "survey about day schedule", 1548806400L,
//      "schwimmy",
//      new ArrayList<QuestionModel>(Arrays.asList(
//        new QuestionModel("When do you usually get up?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("6am - 7am"), new AnswerModel("7am - 8am"), new AnswerModel("earlier than 6am"), new AnswerModel("later than 8am")
//          ))),
//        new QuestionModel("When do you usually go to bed?", "single-choice",
//          new ArrayList<AnswerModel>(Arrays.asList(
//            new AnswerModel("9pm - 10pm"), new AnswerModel("10pm - 11pm"), new AnswerModel("earlier than 9pm"), new AnswerModel("later than 11pm")
//          )))
//      )))
//  ));
//  public static void addUserSurvey(SurveyModel s) {
//    mockUserSurveyList.add(s);
//  }
//  public static void deleteUserSurvey(Long id) {mockUserSurveyList.removeIf(s -> s.getId() == id);}
//  public static SurveyModel getUserSurvey(Long id) {
//    return mockUserSurveyList.stream().filter(s -> s.getId() == id).findFirst().get();
//  }
//  public static List<SurveyModel> getMockUserSurveysList() {
//    return mockUserSurveyList;
//  }
//}
