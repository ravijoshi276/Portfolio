import LittleLemon from './assets/LittleLemonProject.jpg'
import EmployeeRetiention from './assets/Employee_retention_project.png'
export const ProjectList = [
    {
        category: 'Full-Stack Development',
        projects: [
            {
                title: "LittleLemon — Restaurant Ordering & Management Platform",
                image: LittleLemon,
                description: {
                    Problem: "Small restaurants often juggle separate systems for online ordering, delivery coordination, and staff/menu management.",
                    Approach: "Built one role-aware platform — single login, three distinct experiences (customer, delivery, manager) — with permissions enforced server-side in Django REST Framework, not just hidden in the UI.",
                    Result: "A working full-stack app where customers order and reserve tables, delivery staff manage handoffs, and managers control menu/staff/orders — each role restricted to exactly what their permissions allow, even at the API level."
                },
                stack: ["React", "React Router", "Django", "Django REST Framework", "PostgreSQL", "Cloudinary", "DRF Token Auth"],
                links: {
                    demo: "https://littlelemon-gules.vercel.app/",
                    project_link: "https://github.com/ravijoshi276/Projects/tree/4a7a4a4bd5fc43e26d0d2e7c48b304bc40f4948d/Web%20Development/LittLeLemon"
                }
            },
        ]
    },
    {
        category: 'Data Analytics + Machine Learning',
        projects: [
            {
                title: "Salifort Motors: Employee Retention Project",
                image: "",
                description: {
                    Problem: "HR teams often have large amounts of employee data but struggle to identify the factors contributing to employee attrition. The goal was to understand employee turnover patterns and identify factors that could help HR improve retention.",
                    Approach: "Cleaned and explored employee data using Python, Pandas, NumPy, Matplotlib, and Seaborn. Performed exploratory and statistical analysis to identify relationships between attrition and factors such as job satisfaction, overtime, salary, job role, and tenure. Built and evaluated machine learning models using Scikit-learn to predict employee attrition and identify important predictive factors.",
                    Result: "Identified key employee characteristics associated with attrition and developed a predictive model to help identify employees who may be at higher risk of leaving. Translated the findings into actionable HR recommendations focused on employee satisfaction, workload, compensation, and career development."
                },
                stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
                links: {
                    project_link: "https://drive.google.com/file/d/1LdcvbdeRfeTZ0CuFntEKUwzhu8nLUE1K/view?usp=sharing"
                }
            },
            {
                title: "Bike-Share Usage Analysis (Google Data Analytics Capstone)",
                image: "",
                description: {
                    Problem: "Bike-share companies need to understand differences in usage patterns between casual riders and annual members to design more effective marketing strategies.",
                    Approach: "Used SQL to extract and clean ride data, then analyzed and visualized usage patterns in R across rider type, time of day, trip duration, and season.",
                    Result: "Delivered insights and recommendations to support a marketing strategy aimed at converting casual riders into annual members."
                },
                stack: ["SQL", "R"],
                links: {
                    project_link: "https://www.kaggle.com/code/ravijoshi276/case-study"
                }
            },
            {
                title: "Term Deposit Subscription Prediction",
                image: "",
                description: {
                    Problem: "Banks run marketing campaigns to sell term deposits but often can't tell in advance which clients are likely to subscribe, wasting outreach effort.",
                    Approach: "Cleaned and explored client demographic and campaign data, then built and evaluated a classification model in Scikit-learn to predict subscription likelihood.",
                    Result: "Produced a model that flags likely subscribers, giving a data-backed way to prioritize outreach instead of contacting the full client list."
                },
                stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
                links: {
                    project_link: "https://drive.google.com/file/d/1T0xGhbrrDzk5zVMZMFvQ-xOHHNRsfbfa/view?usp=drive_link"
                }
            },
            {
                title: "Housing Price Prediction",
                image: "",
                description: {
                    Problem: "Estimating housing prices accurately from raw listing data requires handling messy, high-cardinality features before any model can be trusted.",
                    Approach: "Applied feature engineering, data preprocessing, and exploratory data analysis, then trained a regression model in Scikit-learn on the cleaned dataset.",
                    Result: "Achieved a 90% R² score on validation data, showing the model explains most of the variance in housing prices."
                },
                stack: ["Python", "Scikit-learn", "Pandas"],
                links: {
                    project_link: "https://drive.google.com/file/d/1T0xGhbrrDzk5zVMZMFvQ-xOHHNRsfbfa/view?usp=drive_link"
                }
            },
            {
                title: "CTC / Salary Prediction Model",
                image: "",
                description: {
                    Problem: "HR teams need a quick, transparent way to estimate a fair salary offer for new hires based on candidate attributes.",
                    Approach: "Built a linear regression model directly in Excel, transforming categorical variables and fitting the model to historical hiring data.",
                    Result: "Produced a working formula that predicts CTC for new hires and validated it against actual salary outcomes."
                },
                stack: ["Excel"],
                links: {
                   
                }
            },
            {
                title: "Sports Analytics using SQL",
                image: "",
                description: {
                    Problem: "Raw sports performance data needed to be structured and queried to surface meaningful performance insights.",
                    Approach: "Designed and populated a PostgreSQL database, then used joins, subqueries, sorting, and aggregation to extract performance metrics.",
                    Result: "Delivered structured performance insights directly from SQL queries, without needing a separate analytics tool."
                },
                stack: ["PostgreSQL"],
                links: {
                   
                }
            }
        ]
    }
];



export const CategoryList = ["ALL",...new Set(ProjectList.map(item=>item.category))]
console.log(CategoryList)