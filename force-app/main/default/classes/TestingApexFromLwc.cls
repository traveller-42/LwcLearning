public with sharing class TestingApexFromLwc {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(){
        return [SELECT Id ,Name,Email 
        FROM Contact
        LIMIT 20];
    }
    @AuraEnabled
    public static List<Account> getAccount(){
        return [SELECT Id , Name  
        FROM Account
        LIMIT 1];
    }
}
