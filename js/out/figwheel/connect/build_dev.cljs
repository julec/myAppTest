(ns figwheel.connect.build-dev (:require [figwheel.client] [figwheel.client.utils] [app.core]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3000/figwheel-ws"})

