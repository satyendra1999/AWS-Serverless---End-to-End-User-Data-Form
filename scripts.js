// Add your API endpoint here
var API_ENDPOINT = "https://w63ecr2hfl.execute-api.ap-south-1.amazonaws.com/employeeapi";

// AJAX POST request to save Employee data
document.getElementById("saveemployee").onclick = function(){
    var inputData = {
        "employeeid": $('#employeeid').val(),
        "name": $('#name').val(),
        "department": $('#department').val(),
        "salary": $('#salary').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("EmployeeSaved").innerHTML = "Employee Data Saved!";
        },
        error: function () {
            alert("Error saving Employee data.");
        }
    });
}

// AJAX GET request to retrieve all Employee
document.getElementById("getemployees").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#EmployeeTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#EmployeeTable").append("<tr> \
                    <td>" + data['employeeid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['department'] + "</td> \
                    <td>" + data['salary'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving Employee data.");
        }
    });
}