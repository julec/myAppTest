(defproject app "0.1.0-SNAPSHOT"
  :description "My App"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/core.async "0.3.465"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.slf4j/slf4j-nop "1.7.13" :scope "test"]
                 [rum "0.10.8"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.14"]
            [deraen/lein-sass4clj "0.3.1"]]

  :sass {:source-paths ["scss"]
         :target-path  "resources/public/css"
         :output-style :compressed
         :figwheel true
         :source-map   true}

  :figwheel {:server-port 3000
             :css-dirs ["resources/public/css"]}

  :clean-targets ^{:protect false} ["resources/public/css/"
                                    "resources/public/js/out"
                                    "resources/public/js/bundle.js"]

  :cljsbuild {:builds {:dev {:source-paths ["src"]
                             :figwheel true
                             :compiler {:main "app.core"
                                        :output-to "resources/public/js/bundle.js"
                                        :output-dir "resources/public/js/out"
                                        :asset-path "js/out"
                                        :optimizations :none
                                        :source-map true}}

                        :release {:source-paths ["src"]
                                  :compiler {:main "app.core"
                                             :output-to "resources/public/js/bundle.js"
                                             :optimizations :advanced}}}})
