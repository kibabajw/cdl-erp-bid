!(function() {
    var main = $("#main");
    var mainsystemsummaries = $("#main-system-summaries");
   
    $(".aside-link-item-wrapper").each(function() {
        $(this).on("click", function() {                 
            $(".aside-link-item-wrapper").each(function() {
                // $(this).css("background-color", "#eee");
                // $(this).children().css( "color", "#4169e1" );
                // $(this).removeClass("card");

                $(".aside-link-item-wrapper span").css("border-bottom", "");
            });

            // $(this).addClass("card");  
            // $(this).css("background-color", "coral");    
            // $(this).children().css( "color", "#fff" );
        });    
    });

    var asidelinkitemhome = $("#aside-link-item-home");    
    var asidelinkitemclients = $("#aside-link-item-clients");    
    var asidelinkitememployees = $("#aside-link-item-employees");    
    var asidelinkitemcontracts = $("#aside-link-item-contracts");    
    var asidelinkitemdocuments = $("#aside-link-item-documents");    
    var asidelinkitemrequests = $("#aside-link-item-requests");   
    var asidelinkitemnotifications = $("#aside-link-item-notifications");       
    
    function buildhomescreen() {
        $("#aside-link-item-home span").css("border-bottom", "3px solid #4169e1"); 
        // border-bottom: 3px solid #333;
        // $("#aside-link-item-home").addClass("card");  
        // $("#aside-link-item-home").css("background-color", "coral");    
        // $("#aside-link-item-home").children().css( "color", "#fff" );

        main.html("");
        mainsystemsummaries.html("");

        main.html(mainsystemsummaries.append(`
            <div class="card" id="summary-button-clients">
                <i class="bi bi-briefcase summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>CLIENTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-employees">
                <i class="bi bi-people summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>EMPLOYEES</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-contracts">
                <i class="bi bi-journal summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>CONTRACTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-documents">
                <i class="bi bi-folder summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>DOCUMENTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-requests">
                <i class="bi bi-hourglass-split summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>REQUESTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-notifications">
                <i class="bi bi-bell summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>NOTIFICATIONS</header>
                <span class="summary-counter">67000</span>
            </div>`
        ));

        main.append(`<div id="other-summaries" class="rounded p-2 card">
        <div id="" class="rounded p-2">
            <span style="font-weight: 600;font-size: 16px;">CLIENTS</span>
            <div><canvas id="clientschart"></canvas></div>
        </div>
        <div id="" class="rounded p-2">
            <span style="font-weight: 600;font-size: 16px;">EMPLOYEES</span>
            <div><canvas id="employeesschart"></canvas></div>
        </div>
        <div id="" class="rounded p-2">
            <span style="font-weight: 600;font-size: 16px;">REQUESTS</span>
            <div><canvas id="requestschart"></canvas></div>
        </div>
        </div>`);
        
        buildchart(document.getElementById('clientschart'), 'doughnut', "Clients");        
        buildchart(document.getElementById('employeesschart'), 'pie', "Employees");
        buildchart(document.getElementById('requestschart'), 'polarArea', "Requests");
    };
    
    function buildchart(ctx, type, audience) {             
        let _label = '# of ' + audience;
        
        new Chart(ctx, {
            type: type,
            data: {
              labels: ['Active', 'In-active', 'Dormant'],
              datasets: [{
                label: _label,
                data: [420, 109, 91],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
    };

    function buildclientsscreen() {
        $("#aside-link-item-clients span").css("border-bottom", "3px solid #4169e1");

        main.html(`
        <h4>Clients' Summary</h4>
            <table id="clients-table" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Registration Date</th>
                        <th>Employees</th>
                        <th>Contract Renewals</th>
                        <th>Requests</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Registration Date</th>
                        <th>Employees</th>
                        <th>Contract Renewals</th>
                        <th>Requests</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        `);

        new DataTable("#clients-table", {
            ajax: './clients.json',
            processing: true,
            serverSide: true,
            columnDefs: [
                {
                    data: null,
                    defaultContent: '<button type="button" class="btn btn-light"><i class="bi bi-pencil-square"></i></button>',
                    targets: -1
                }
            ]
        });
    };
    
    function buildclientsemployees() {
        $("#aside-link-item-employees span").css("border-bottom", "3px solid #4169e1");

        main.html(`
        <h4>Employees</h4>
            <table id="clients-table" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone-number</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Start Date</th>
                        <th>Current Salary</th>
                        <th>Contract Duration</th>
                        <th>Contract Status</th>
                        <th>Employee Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone-number</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Start Date</th>
                        <th>Current Salary</th>
                        <th>Contract Duration</th>
                        <th>Contract Status</th>
                        <th>Employee Status</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        `);

        new DataTable("#clients-table", {
            ajax: './employees.json',
            processing: true,
            serverSide: true,
            columnDefs: [
                {
                    data: null,
                    defaultContent: '<button type="button" class="btn btn-light"><i class="bi bi-pencil-square"></i></button>',
                    targets: -1
                }
            ]
        });
    };

    function buildclientscontracts() {
        $("#aside-link-item-contracts span").css("border-bottom", "3px solid #4169e1");

        main.html(`
        <h4>Clients' Contracts</h4>
            <table id="clients-table" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Emp Email</th>
                        <th>Emp Phone</th>
                        <th>Contract Start Date</th>
                        <th>Contract End Date</th>
                        <th>Renewals</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Emp Email</th>
                        <th>Emp Phone</th>
                        <th>Contract Start Date</th>
                        <th>Contract End Date</th>
                        <th>Renewals</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        `);

        new DataTable("#clients-table", {
            ajax: './contracts.json',
            processing: true,
            serverSide: true,
            columnDefs: [
                {
                    data: null,
                    defaultContent: '<button type="button" class="btn btn-light"><i class="bi bi-pencil-square"></i></button>',
                    targets: -1
                }
            ]
        });
    };

    function buildclientsdocuments() {
        $("#aside-link-item-documents span").css("border-bottom", "3px solid #4169e1");

        main.html(`
        <h4>Clients' Documents</h4>
        <div id="div-documents" style="display: flex; flex-direction: row;flex-wrap: wrap;"></div>
        `);       
        
        $("#div-documents").html("");
        
        $("#div-documents").html(`
        <select id="pet-select"  class="select mt-2 mb-4 rounded">
            <option value="">Please choose a Company</option>
            <option value="cdl">Career Developers Limited</option>
            <option value="favoutechsolutions">Favour Tech Solutions</option>
        </select>
        `);
        
        $("#div-documents").append(`
        <input class="form-control mr-sm-2 mb-4" type="search" placeholder="Search documents" aria-label="Search">
        `);

        for (var i = 0, length = 28; i < 28; ++i) {
            $("#div-documents").append(`
            <div style="color: #888;font-size: 13px;font-weight: 600;"><div class="card document-block"><i class="bi bi-three-dots-vertical" style="font-size: 20px;position:absolute;margin-top:-50px;right:10px;"></i><i class="bi bi-filetype-xlsx"></i></div>&nbsp;&nbsp;&nbsp;Document 00${i+1}</div>
            `);
        }
    };

    function buildclientsrequests() {
        $("#aside-link-item-requests span").css("border-bottom", "3px solid #4169e1");

        main.html(`
        <h4>Clients' Requests</h4>
        <div id="div-requests" style="display: flex; flex-direction: row;flex-wrap: wrap;"></div>
        `);       
        
        $("#div-requests").html("");
        
        $("#div-requests").html(`
        <select id="pet-select"  class="select mt-2 mb-4 rounded">
            <option value="">Please choose a Company</option>
            <option value="cdl">Career Developers Limited</option>
            <option value="favoutechsolutions">Favour Tech Solutions</option>
        </select>
        `);
        
        $("#div-requests").append(`
        <input class="form-control mr-sm-2 mb-4" type="search" placeholder="Search requests" aria-label="Search">
        `);

        for (var i = 0, length = 2; i < 2; ++i) {
            $("#div-requests").append(`
            <div class="card p-2 request-block">
                <header>
                    <b>Career Developers Limited</b>
                </header>
                <p>Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>
                <div class="req-item-menu">
                <i class="bi bi-trash3"></i>
                <i class="bi bi-x-circle"></i>
                <i class="bi bi-plus-circle"></i>
                </div>
            </div>
            `);
        }
    };


    function buildclientsnotifications() {
        main.html(`
        <h4>Notifications</h4>
        <div id="div-notifications" style="display: flex; flex-direction: row;flex-wrap: wrap;"></div>
        `);       
        
        $("#div-notifications").html("");
        
        $("#div-notifications").html(`
        <select id="pet-select"  class="select mt-2 mb-4">
            <option value="">Please choose a Company</option>
            <option value="cdl">Career Developers Limited</option>
            <option value="favoutechsolutions">Favour Tech Solutions</option>
        </select>
        `);
        
        $("#div-notifications").append(`
        <input class="form-control mr-sm-2 mb-4" type="search" placeholder="Search notifications" aria-label="Search">
        `);

        for (var i = 0, length = 6; i < 6; ++i) {
            $("#div-notifications").append(`
            <div class="card p-2 request-block">
                <header>
                    <b>Career Developers Limited(CDL)</b><i class="bi bi-trash3 cursor-pointer"></i>
                </header>
                <p>Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>
            </div>
            `);
        }
    };


    $(document).ready(function() {
        buildhomescreen();
        
        asidelinkitemhome.on("click", buildhomescreen);
        asidelinkitemclients.on("click", buildclientsscreen);
        asidelinkitememployees.on("click", buildclientsemployees);
        asidelinkitemcontracts.on("click", buildclientscontracts);
        asidelinkitemdocuments.on("click", buildclientsdocuments);
        asidelinkitemrequests.on("click", buildclientsrequests);
        asidelinkitemnotifications.on("click", buildclientsnotifications);

        // summary buttons
        $("#summary-button-clients").on("click", buildclientsscreen);

        $("#summary-button-employees").on("click", function() {
            main.html("");
            main.html("<h5>employees</h5>");
        });
        $("#summary-button-contracts").on("click", function() {
            main.html("");
            main.html("<h5>contracts</h5>");
        });
        $("#summary-button-documents").on("click", function() {
            main.html("");
            main.html("<h5>documents</h5>");
        });
        $("#summary-button-requests").on("click", function() {
            main.html("");
            main.html("<h5>requests</h5>");
        });
        $("#summary-button-notifications").on("click", function() {
            main.html("");
            main.html("<h5>notifications</h5>");
        });
    });

})();