job('Portal Front example') {
    scm {
        git('https://github.com/syncnsecure/portal-front') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('syncnsecure')
            node / gitConfigEmail('tech@esyncnsecure.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in 
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("yarn install")
    }
}
