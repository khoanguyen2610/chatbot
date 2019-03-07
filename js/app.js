let socket = io.connect('http://localhost:8880');
let cookie_app_chat = '_vsvn_chatbot';

$(function(){
    let utility = new Utilities();

    if(cookie_chat_id = utility.getCookie(cookie_app_chat)){
        socket.emit('join-room', {room_id: cookie_chat_id});
    }else{
        //Generate chat id stored by coockie
        let cookie_chat_id = utility.generateId();
        utility.setCookie(cookie_app_chat, cookie_chat_id, 1);

        socket.emit('join-room', {room_id: cookie_chat_id});
    }



    //Send request to server
    $('#btn-chat').on('click', function(){
        let msg = $('#btn-input').val();
        if(msg){
            socket.emit('send-message', {room_id: cookie_chat_id, content: msg});
            //reset value
            $('#btn-input').val('');
        }
    })

    //Get response from server
    socket.on('get-message', function(res){
        let html = `<li class="right clearfix">
                        <span class="chat-img pull-right"><img alt="User Avatar" class="img-circle" src="http://placehold.it/50/FA6F57/fff&text=BP"></span>
                        <div class="chat-body clearfix">
                            <div class="header">
                                <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small>
                                <strong class="pull-right primary-font">Anonymous</strong>
                            </div>
                            <p>` + res + `</p>
                        </div>
                    </li>`;
        $('ul.chat').append(html);
    });
})
