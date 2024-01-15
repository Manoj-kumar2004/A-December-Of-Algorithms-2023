const employees = [
    { empname: "John" },
    { empname: "Alice" },
    { empname: "Bob" },
  ];
  
  function extractSubstrings(data, start, length) {
    return data.map((employee) => {
      const empname = employee.empname;
      const substring = empname.substring(start - 1, start - 1 + length);
      return { empname, substring };
    });
  }
  
  const result = extractSubstrings(employees, 2, 2);
  console.log(result);
  