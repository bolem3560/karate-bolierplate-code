@ignore
Feature: To Execute the post service with multiple data
  Background: common functions
    And configure ssl = true
    * def commonmethods = call read("../commonfunctions/commonfunctions.feature")
    * commonmethods.sleep(200)

  Scenario Outline: Data Driven for the job description entry
    * configure ssl = true
    * def requestBody = <requestObject>
    * requestBody.processingGroupReference = _pgRerNumber
    * requestBody.processingNumberInGroup = _pnIngroup
    * requestBody.refTypeOfMarket = _market
    * print _domain
    Given url _domain
    And path _apiEndpoints.treatySubmissionPost
    And request requestBody
    * configure headers = _httpHeaderParameters.commonHeaders
    When method post
    And status <status>
    And print response
    And match response.audit.at == '#notnull'
    And match response.id == '#notnull'
    * def timestamp = response.audit.at
    * def id = response.id
    * def status = response.status
    * def actualresponse = <responseObject>
    * actualresponse.audit.at = timestamp
    * actualresponse.id = id
    * actualresponse.processingGroupReference = _pgRerNumber
    * actualresponse.processingNumberInGroup = _pnIngroup

    Examples: 
      | requestObject                                         | responseObject                                                 | jobDescription                 | status |
      | read("../requests/treatySubmission/requestBody.json") | read("../responses/treatySubmission/postsuccessResponse.json") | To develop andriod application |    201 |
