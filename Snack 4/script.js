var short = document.querySelector('#output');
var names = document.querySelectorAll('.names');

var students = [

    {
        Name: 'Pippo',
        Surname: 'Baudo',
        Age: 80,
        Description: ""
    },

    {
        Name: 'Mimmo',
        Surname: 'Mammo',
        Age: 18,
        Description: ""
    },

    {
        Name: 'Ottavio',
        Surname: 'Fogliata',
        Age: 162,
        Description: ""
    }

]

for (i = 0; i < students.length; i++) {
    var descr = prompt('Describe ' + students[i].Name + ' ' + students[i].Surname + ' in a few words.');
    students[i].Description = descr;
}

var rowHeader = short.insertRow(-1);
for (h = 0; h < Object.getOwnPropertyNames(students[0]).length; h++) {
    var cellHeader = rowHeader.insertCell(h)
}

var counter = 1;

for (var key in students[0]) {
   
    for (x = 0; x < counter; x++) {
        rowHeader.cells[counter-1].innerHTML = key;
    } // This tricks the software into picking a different "key" every cycle.
      // I came up with this! Brain is melting.
    counter++;
}

for (x = 0; x < students.length; x++) {
    var row = short.insertRow(-1);
    for (c = 0; c < Object.getOwnPropertyNames(students[0]).length; c++) {
        
        var cell = row.insertCell(c)

        switch (c) {
            case 0:
                cell.innerHTML = students[x].Name
                break;
            case 1:
                cell.innerHTML = students[x].Surname
                break;
            case 2:
                cell.innerHTML = students[x].Age
                break;
            case 3:
                cell.innerHTML = students[x].Description
                break;
        }
    }
}