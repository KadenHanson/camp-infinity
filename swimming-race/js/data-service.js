const token = btoa('Basic:ipl5pyy7q32heo4msg2tdc5hra6e3zngcwootvw2fbxx73zbvptq');

function getWorkItems(id) {
  if (id !== null) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: `http://localhost:3000/workitems?ids=${id}`,
      headers: { "Authorization": token },
      error: function (data) {
        console.log('Failure: ', data);
      },
      success: function (data) {
        console.log('Success: ', data);
      }
    });
  }
}

function getWorkItems2() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://analytics.dev.azure.com/EclipseLMS/Classic%20LMS/_odata/v3.0-preview/WorkItems?
    $select=WorkItemId,Title,WorkItemType,State,CreatedDate
    &$filter=startswith(Area/AreaPath,'Classic LMS\\RD Team')
    &$orderby=CreatedDate desc
    &$top=10`,
    headers: { "Authorization": token },
    error: function (data) {
      console.log('Failure: ', data);
    },
    success: function (data) {
      console.log('Success: ', data);
    }
  });
}