var socket = new WebSocket("ws://localhost:55455")
socket.onmessage = function(e){
console.log(e.data)
}

socket.onerror = function(e){
console.log(e.data)
}

------------------------------backend--------------------------
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        await websocket.send_text(f"Message text was: {data}")
