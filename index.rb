def handleRequest(event)
    Response "Hello World!", { headers: 'text/plain' }
end

addEventListener 'fetch', do |event|
    event.respondWith(handleRequest(event.request))
end