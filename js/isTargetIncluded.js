function isTargetIncluded() {

    var target = document.getElementById("target").value;
    var timeFrom = document.getElementById("timeFrom").value;
	var timeTo = document.getElementById("timeTo").value;
	var numTarget = document.getElementById("numTarget");
	var numFrom = document.getElementById("numFrom");
	var numTo = document.getElementById("numTo");
	var res = document.getElementById("res");
	var targetNo;
	var timeFromNo;
	var timeToNo;
	
	//入力内容の確認
	if (target === "" || timeFrom === "" || timeTo === ""){
	    alert("入力欄には数字を入力してください");
	    return false;
	}
	else if(timeFrom < 0 || 23 < timeFrom || timeTo< 0 || 23 < timeTo || target < 0 || 23 < target){
	    alert("0~23の間の数字を入力してください");
	    return false;
	}
	else{
	    //文字列から数値へ変換
	    targetNo = Number(target);
	    timeFromNo = Number(timeFrom);
	    timeToNo = Number(timeTo);
	    //入力結果の表示
	    numTarget.innerHTML = "ターゲット：" + targetNo + "時" ;
	    numFrom.innerHTML = "開始時刻：" + timeFromNo + "時" ;
	    numTo.innerHTML = "終了時刻：" + timeToNo + "時" ;
	}
	// ケース1． 開始時刻　<　終了時刻
	if (timeFromNo < timeToNo){
	    alert("ケース１");
	    if(timeFromNo <= targetNo && timeToNo > targetNo){
	        alert("やりました！ターゲットは範囲内です！(ケース1:成功)");
	        res.innerHTML = "<p style='background:aqua;width:300px;'>結果：(ケース1:成功)</p>";
	    }
	    else{
	        alert("残念！ターゲットは範囲外です...(ケース1:失敗)");
	        res.innerHTML = "<p style='background:red;width:300px;'>結果：(ケース1:失敗)</p>";
	    }
	} 
	// ケース2． 開始時刻　>　終了時刻 
	else if (timeFromNo > timeToNo){　
	    alert("ケース２");
		numTarget.innerHTML = "ターゲット：" + targetNo + "時" ;
		numTo.innerHTML = "終了時刻：" + timeToNo ;
	    if(timeFromNo <= targetNo || targetNo  < timeToNo){
	        alert("やりました！ターゲットは範囲内です！(ケース2:成功)");
	        res.innerHTML = "<p style='background:aqua;width:300px;'>結果：(ケース２:成功)</p>";
	    }
	    else{
	     alert("残念！ターゲットは範囲外です...(ケース2:失敗)");
	     res.innerHTML = "<p style='background:red;width:300px;'>結果：(ケース２:失敗)</p>";
	    }
	}
	// ケース3． 開始時刻　==　終了時刻 
	else if(timeFromNo  === timeToNo){
	    alert("ケース３");
	    if(timeFromNo  <= targetNo  && timeToNo >= targetNo){
	        alert("やりました！ターゲットは範囲内です！(ケース3:成功)");
	        res.innerHTML = "<p style='background:aqua;width:300px;'>結果：(ケース３:成功)</p>";
	    }
	    else{
	        alert("残念！ターゲットは範囲外です...(ケース3:失敗)");
	        res.innerHTML = "<p style='background:red;width:300px;'>結果：(ケース３:失敗)</p>";
	    }
	}
}