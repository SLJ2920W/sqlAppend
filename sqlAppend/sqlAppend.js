var el = document.getElementById("go");

el.addEventListener("click", function() {

	var lnSql = ''; // 라인 마다 sql
	var lnSqlArr = []; // 라인 마다 sql 저장 배열
	var lnSqlLenArr = []; // 라인 마다 sql 길이 저장 배열
	var lnBlankFlag = false;

	var sql = document.getElementById("sqlFormat").value;
	sql.split("\n").forEach(function(item, i) {

		lnSql = item.replace(/\s+$/gi, "");

		// 문자열이 없으면 넘김
		lnBlankFlag = item.replace(/^\s+/gi, "").match(/^(?!\d).*$/);
		if (!lnBlankFlag) {
			continue;
		}

		lnSqlLenArr.push(lnSql.length);
		lnSqlArr.push(lnSql);

	});

	// 각 sql 라인에 최대 길이 정렬하여 얻음
	var max = lnSqlLenArr.sort(function(a, b) {
		return b - a;
	})[0] + 5;

	lnSqlArr.forEach(function(item, i) {
		var rv = document.getElementById("result").value;
		document.getElementById("result").value = rv + "sql.append(\"\\n "
				+ RPAD(item, " ", max) + "\");\n";

	});

});

// http://hellowworld.tistory.com/entry/자바스크립트로-LPAD-RPAD-구현하기
function RPAD(s, c, n) {
	if (!s || !c || s.length >= n) {
		return s;
	}

	var max = (n - s.length) / c.length;
	for (var i = 0; i < max; i++) {
		s += c;
	}

	return s;
}