package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",           // Lokasi file .feature
        glue = {"stepdefenitions"},                         // Lokasi step definitions. Cucumber memahami bahwa ini merujuk ke package Java stepdefenitions, bukan direktori file di sistem file.
        plugin = {
                "pretty",                                   // Output konsol yang rapi
                "html:target/cucumber-report.html",          // HTML report
                "json:target/cucumber-report.json",          // JSON report
                "junit:target/cucumber-report.xml"           // JUnit XML report
            } 
        
)

public class TestRunner {
    
}
