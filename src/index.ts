import '../style/default.scss'
import * as $ from 'jquery';
import { Greeter } from "./Greeter";

$(function() {
    const greeter = new Greeter();
    console.log("ready");
    $('#sayHelloButton').click(function() {
        const name = String($('#name').val());
        $('#result').html(greeter.SayHello(name));
    });
});
