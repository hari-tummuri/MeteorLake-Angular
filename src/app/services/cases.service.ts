import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cases } from '../Case';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  cases : Cases[] = [
    { "caseno": "1024", "lawyer": "John Doe", "casetype": "Civil law", "judge": "DAS J.", "status": "closed","summary":"The appeal case number 182 of 1952 is about an appellant, Hoosein Kasam Dada (India) Ltd., who submitted a Sales Tax return to the Sales Tax Officer, Akola. The officer, not being satisfied with the account books produced by the appellant, submitted the case to the Assistant Commissioner of Sales Tax, Amravati, for assessment. The Assistant Commissioner issued a notice under section 11 and fixed the case for disposal. After several proceedings, the Assistant Commissioner assessed the appellant to the sum of Rs. 58,657140. The appellant appealed to the Sales Tax Commissioner, Madhya Pradesh, under section 22(l) of the Central Provinces and Berar Sales Tax Act, 1947. However, the appeal was not admitted as it was not accompanied by any proof of the payment of the tax. The appellant then moved the Board of Revenue, Madhya Pradesh, by a revision application against the order of the Sales Tax Commissioner. The High Court dismissed the application and the appellant applied for leave to appeal to the Supreme Court. The Supreme Court granted special leave to appeal, but limited to the question of the effect of the amendment to section 22 of the Act on the appellant's appeal to the Sales Tax Commissioner, Madhya Pradesh."},
    { "caseno": "2728", "lawyer": "Jane Smith", "casetype": "Criminal law", "judge": "BHAGWATI J", "status": "closed","summary":"The Civil Appeal No. 2728 of 1972 revolves around the question of whether there was any material evidence to justify the finding that a sum of Rs. 1,07,350 was remitted by the appellant firm, M/s. Kishinchand Chellaram, from Madras to Bombay, and that it represented the undisclosed income of the firm. The firm had challenged the decision of the Bombay High Court, which had upheld the Income Tax Officer's view that the firm failed to satisfactorily explain the source of the remittance, resulting in it being added to the firm's taxable income. However, the Supreme Court ruled that the evidence relied upon by the Income Tax Officer and the High Court, namely two letters from the Punjab National Bank Limited, did not constitute material evidence justifying the decision. The court highlighted that the letters were not supported by any documents or papers and were based on hearsay. The Supreme Court concluded that the highest evidence that could be established was that an employee of the firm remitted the amount to another employee, but it didn't necessarily imply that the amount belonged to the firm. The burden was on the revenue to prove that the remitted amount belonged to the firm, which they failed to do. The Supreme Court thus allowed the appeal, setting aside the judgement of the High Court."},
    { "caseno": "3529", "lawyer": "Emily Brown", "casetype": "Employment law", "judge": "Khanna, J. V. R. Krishna Iyer", "status": "next hearing","summary":"The appeal case number 910 of 1970 concerns the election of Jugal Kishore Patnaik to the Orissa Legislative Assembly from Bhadrak constituency, which was declared void by the Orissa High Court due to an election petition filed by Ratnakar Mohanty. The High Court found that Mohanty's nomination papers had been improperly rejected by the Returning Officer, due to an objection that Mohanty was disqualified under section 9A of the Representation of the People Act, 1951, for having contracts with the Government of Orissa. The Supreme Court of India dismissed the appeal, upholding the High Court's decision, stating that Mohanty's contracts were not personal, but were undertaken as the Sarpanch of Rahanj Gram Panchayat, and therefore, he was not disqualified from running for election. The Supreme Court's judgment highlighted the need for clearer electoral regulations to prevent such misunderstandings from occurring."},
    { "caseno": "4120", "lawyer": "David Lee", "casetype": "Family law", "judge": "VENKATARAMIAH, J.", "status": "closed","summary":"The Civil Appeal No. 2005 of 1978 was filed under section 123 of the Jammu and Kashmir Representation of People Act, 1957, challenging the dismissal of an election petition due to non-compliance with section 89(3) of the Act. The appellant and respondent were candidates in the 1977 general election for the Handwara Assembly Constituency, with the respondent being declared the successful candidate. The appellant subsequently filed an election petition challenging the validity of the respondent's election on various grounds. The High Court dismissed the petition on the grounds that the appellant had not complied with section 89(3) of the Act, which requires that every copy of the election petition be attested by the petitioner under his own signature to be a true copy of the petition. The Supreme Court upheld the High Court's decision, stating that the requirement for the petitioner to attest the copies of the petition under his own signature is mandatory, and non-compliance results in the dismissal of the petition as per section 94 of the Act. The appeal was therefore dismissed."},
    { "caseno": "6991", "lawyer": "Sarah Wilson", "casetype": "Civil law", "judge": "MOHAN, J", "status": "dismissal of suit","summary":"The case, Appeal Nos. 266 267 of 1993, centers on a charge memorandum issued against the respondent, who was working as an Income Tax Officer, Muktsar in 1982-83. The memorandum alleges that the respondent completed certain assessments in an irregular manner, hastily, and with the intent to confer undue favors on the assessees. The Central Administrative Tribunal Principal Bench, New Delhi ruled in favor of the respondent and quashed the charge memorandum, leading to the current appeal. The Supreme Court of India reversed the Tribunal's decision, upholding the validity of the charge memorandum. The Court concluded that disciplinary action can be taken in cases where the officer had acted in a manner that reflects negatively on his reputation for integrity, good faith or devotion to duty, or if there's evidence of recklessness, misconduct, negligence or undue favoritism in the discharge of his duty. The court emphasized that the disciplinary action is not based on the correctness or legality of the respondent's decision, but on his conduct in discharging his duties. The court made it clear that the respondent can put forth all defenses open to him in the departmental inquiry which will be considered on its merit."},
    { "caseno": "5871", "lawyer": "James Taylor", "casetype": "Criminal law", "judge": "VENKATACHALIAH, J.", "status": "dismissal of suit","summary":"The petition under Article 32 of the Indian Constitution questions the validity of Regulation 7 along with Schedule I of State Bank of Patiala (Officers') Service Regulations,1979. It concerns the placement and fitment of existing officers in the new grades and scales of pay. The State Bank of Patiala, a subsidiary of the State Bank of India, revised and restructured pay scales based on the recommendations of the Pillai Committee.The petitioners, Sri Tarsem Lal Gautam and Sri C. V. Madan, who are Grade A officers, challenged the classification of existing officers into different categories for fitment in the revised pay scales based solely on the date of their promotion as arbitrary and violative of Article 14 of the Constitution of India. The bank argued that the Regulations did not bring about a mere revision of pay, but a rationalisation, standardisation and restructuring of the whole administrative set-up of the management cadres. The court ruled that the principle of classification among the existing officers for purposes of fitment was not unreasonable and arbitrary, and therefore, not violative of Article 14. The petition was dismissed."},
    { "caseno": "4136", "lawyer": "Emma Martinez", "casetype": "Employment law", "judge": "BHAGWATI, J", "status": "closed","summary":"The appeals concern the valuation of shares of Mafatlal Gagalbhai Pvt. Ltd., an investment company. The appellant, Pritam Singh, was elected to the Haryana State Legislative Assembly in 1972, but his election was challenged by respondent Balbir Singh on the grounds that Singh committed corrupt practices, including the hiring of vehicles for free conveyance of electors to polling stations. The main issue was the method of valuation of the company's shares. The Gift Tax and Wealth Tax officers used the break-up method, which the appellant contested, advocating for the profit-earning method instead. The Appellate Assistant Commissioner applied a combination of both methods, resulting in a higher valuation than the appellant claimed. The appellant appealed to the Tribunal, which ruled in favor of the profit-earning method, rejecting the combination method. The Revenue appealed to the Supreme Court, arguing that the High Court should have called for a reference on the question of the appropriate method of valuation. The Supreme Court dismissed the appeal, upholding the Tribunal's decision. The court stated that the profit-earning method was the appropriate method for valuing shares of a going concern and that the combination of the two methods was not a valid principle of valuation. The court also dismissed the Revenue's argument that the break-up method should apply due to a rule in the Gift Tax Act, as the question was not raised before the Tribunal."},
    { "caseno": "1771", "lawyer": "Daniel Harris", "casetype": "Employment law", "judge": "AYYANGAR J. SHAH, J", "status": "dismissal of suit","summary":"The appellant owned several estates where tea was grown and was assessed to sales tax for the years 1954-55 and 1955-56. The appellant claimed that certain sales of its tea conducted by auction at Fort Cochin, a place then in the Madras State, were sales outside the Travancore Cochin State and therefore exempt from taxation. This claim was rejected by the assessing authority, the Appellate Assistant Commissioner, and the Sales Tax Appellate Tribunal. The appellant appealed to the Supreme Court, arguing that the High Court should have called for a reference on the question of the appropriate method of valuation. The Supreme Court dismissed the appeal, ruling that the profit-earning method was the appropriate method for valuing shares of a going concern and that the combination of the two methods was not a valid principle of valuation. The court also dismissed the Revenue's argument that the break-up method should apply due to a rule in the Gift Tax Act, as the question was not raised before the Tribunal. The Supreme Court concluded that the present appeals dependent on the correctness of the meaning of the expression 'outside sales' in article 286(1)(a), which the High Court adopted in A. V. Thomas's case, had to be allowed. The court also declined to permit the respondent to argue a point about the property in the goods not having passed at Fort Cochin in the Madras State, as the point was not raised before the High Court. The appeals were thus allowed and the order of the High Court reversed."},
    { "caseno": "2031", "lawyer": "Olivia Garcia", "casetype": "Family law", "judge": "Justice Surya Kant", "status": "case dismissed","summary":"The appeal case number 116 of 1964 pertains to the election of Jugal Kishore Patnaik to the Orissa Legislative Assembly from Bhadrak constituency. This election was declared void by the Orissa High Court due to an election petition filed by Ratnakar Mohanty. Mohanty claimed that his nomination papers were improperly rejected by the Returning Officer, leading to the invalidation of the election. The case reached the Supreme Court of India, which dismissed the appeal and upheld the High Court's decision. The Supreme Court emphasized the need for clearer electoral regulations to avoid similar misunderstandings in the future. The court noted that the jurisdiction of civil courts can be excluded by a statutory provision, however, it does not necessarily mean that the plea against the validity of the order passed by the District Magistrate cannot be raised in a civil court. The case highlighted the complexities in the electoral law and the need for its reform."}
  ]


  constructor(private http : HttpClient) { }

  getCases() {
    return this.cases;
  }

  getSummaryStatic(){

    let result: Cases[] = this.cases.filter((obj: Cases) => obj.caseno === "1024");
    return result[0]['summary']
  }
  getCasesById(id: any) {
    return this.http.get(`http://127.0.0.1:8080/apiCaseId?caseId=${id}`);
  }
}
