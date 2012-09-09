<?php

$KEY = "2a14568fc375f31f50010d4a5c8667c8:16:66305743";

$url = "http://api.nytimes.com/svc/news/v3/content/nyt/all/2?api-key=$KEY&limit=10";

readfile($url);