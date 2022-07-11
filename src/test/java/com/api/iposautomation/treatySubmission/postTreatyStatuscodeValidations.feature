Feature: Test all http status codes for Treaty Submission post service

  Scenario Outline: As a user, I want to test status code as <status>
    * configure ssl = true
    Given url _domain
    And path _apiEndpoints.treatySubmissionPost
    And request <requestObject>
    * configure headers = _httpHeaderParameters.commonHeaders
    When method post
    And status <status>
    And print response

    Examples: 
      | requestObject                                                  | responseObject                                                 | status |
      | read("../requests/treatySubmission/requestBody.json")          | read("../responses/treatySubmission/postsuccessResponse.json") |    201 |
      | read("../requests/treatySubmission/invalidApRpLpanCount.json") | read("../responses/treatySubmission/postsuccessResponse.json") |    400 |
