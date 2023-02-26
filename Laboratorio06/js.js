function check_pw(){
    var pw = document.getElementById('pw').value;
    // document.getElementById('pw') --> pw라는 이름을 가진 id를 참조한다.
    // document.getElementById('pw') --> pw라는 이름을 가진 id의 값을 참조한다.
    var sc = ["!","@","#","$","%"]; //sc --> 비밀번호 입력 조건에 들어가는 특수문자를 배열 형태로 정의한 것
    var check_sc = 0; // check_sc --> 특수문자 체크 변수로 특수문자 발견 시 1, 발견되지 않을 시 0이 입력되도록 한다.


    // 비밀번호의 길이가 6글자 미만 또는 16글자 초과 시 window.alert 메소드를 사용해 오류 메시지를 출력시키고 입력했던 pw를 초기화시킨다.
    if(pw.length < 6 || pw.length > 16){ 
        window.alert("Your password should be over 6, but under 16 characters");
        document.getElementById("pw").value = "";
    }


    // SC 배열의 모든 값을 pw와 비교한다.
    /** pw.idexOf('sc[i]')은 사용자가 입력한 비밀번호(pw)에 sc[i]가 있는지 확인하는 메소드이며 존재할 시 존재하는 위치를 반환하고 그렇지 
     * 않을 시 -1을 반환한다. 즉, sc에 들어있는 문자열이 존재할 시 check_sc를 1로 만들어 준다. */
    for(var i = 0; i < sc.length; i++){
        if(pw.indexOf(sc[i]) != -1){
            check_sc = 1;
        }
    }

    
    // check_sc가 0일 경우 특수문자가 들어있지 않다는 메시지와 함께 입력했던 비밀번호를 초기화
    if(check_sc == 0){
        window.alert("It doesn't contain special character such as: !,@,#,$,%")
        document.getElementById("pw").value = ""; 
    }


    /** 위의 두가지 비밀번호 입력조건에는 공통점이 있다. 바로 조건을 만족하지 않을 시 입력했던 비밀번호를 초기화한다는 것이다. 반대로 초기화가 되지 
     * 않았다는 것은 조건을 만족했다는 의미이기 때문에 일치여부 확인을 위한 단계로 넘어가야 한다. 
     * 만약 이 코드가 없다면 위의 두가지 비밀번호 입력 조건을 만족하지 않았음에도 불구하고 일치여부를 확인하게 된다. 일을 두 번한다는 것이다.
     */
    if(document.getElementById("pw").value != "" && document.getElementById("pw2").value != ""){
        if(document.getElementById("pw").value == document.getElementById("pw2").value){
        // pw의 value값과 pw2의 value값이 일치한다면
            document.getElementById("check").innerHTML = "Verified Password"
            // check라는 id를 참조하여 그 안에 데이터를 넣는다. 즉 수정하기 위한 코드이다.
            document.getElementById("check").style.color = 'blue';
            // 색을 변경해주었다.
        }
        else{
            document.getElementById("check").innerHTML = "Not matching password";
            document.getElementById("check").style.color = "red";
        }
    }
}