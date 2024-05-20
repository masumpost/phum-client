const adminPaths2 = [
   {
      name: "dashborad",
      path: "dashboard",
      element: "dashboard",
   },
   {
      name: "user management",
      children: [
         {
            name: "create admin",
            path: "create-admin",
            element: "CreateAdmin",
         },
         {
            name: "create faculty",
            path: "create-faculty",
            element: "CreateFaculty",
         },
         {
            name: "create student",
            path: "create-student",
            element: "CreateStudent",
         },
      ],
   },
];

const newArray = adminPaths2.reduce((acc, item) => {
   if (item.path && item.name) {
      acc.push({
         key: item.name,
         label: "NAVLINK",
      });
   }
   if (item.children) {
      acc.push({
         key: item.name,
         label: item.name,
         children: item.children.map((child) => ({
            key: child.name,
            label: "NAVLINK",
         })),
      });
   }

   return acc;
}, []);

console.log(JSON.stringify(newArray));
