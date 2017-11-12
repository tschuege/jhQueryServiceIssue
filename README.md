
# Demo Repo
To demonstrate an issue with *QueryService / JPA classes not generated

## Steps
* jhipster (init)
    * Monolithic Application
    * JWT Auth
    * mySQL (also in DEV)
    * Gradle
* jhipster import-jdl ./entities.jh -> contains one entity "Customer" and "filter all"
* open application in Intellij IDEA
* run build -> not successful

Since I added "filter all" to entities.jh which only contains one single entity called "Customer" jHipster generated a service CustomerQueryService.java.
There it uses the static class Customer_ which I guess should be generated during the build. Appearently this ist no the case.
