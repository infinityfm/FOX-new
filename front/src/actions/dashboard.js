const getDashboardLayout = (userRole = "Dum", projectId = null) => {
  return dispatch => {
    let dashboard = null;
    switch (userRole) {
      case 'Contr':
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
            {
              _tag: "CSidebarNavTitle",
              _children: ["APPLICATION"]
            },
            {
              _tag: "CSidebarNavItem",
              icon: "cil-user",
              name: "1. Personnel Management",
              to: `/projects/${projectId}/assign_workers`,
            },
            // {
            //   _tag: "CSidebarNavItem",
            //   name: "2. Safety",
            //   to: "safety_video",
            // },
            {
              _tag: "CSidebarNavItem",
              icon: "cil-file",
              name: "2. Related docs",
              to: `/projects/${projectId}/related_documents`,
            },
            {
              _tag: "CSidebarNavItem",
              name: "3. Submit Proposal",
              to: `/projects/${projectId}/submit_proposal`,
            },
            {
              _tag: "CSidebarNavItem",
              icon: "cil-send",
              name: "Application status",
              to: "/contractor-application-status",
              icon: "",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_workers",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_workers",
                  to: "/workers",
                  linktext: "Workers",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_projects",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_projects",
                  to: "/projects",
                  linktext: "Projects",
                }
              ],
            },
          ],
        };
        break;
      case 'CliMan':
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_approvals",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_approvals",
                  to: "/approvals",
                  linktext: "Approvals",
                },
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_current",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_projects",
                  to: "/projects",
                  linktext: "Projects",
                },
              ],
            },
          ],
        };
        break;
      case 'CliAdm':
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_managers",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_managers",
                  to: "/managers",
                  linktext: "Managers",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_projects",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_projects",
                  to: "/projects",
                  linktext: "Projects",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_contractors",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_contractors",
                  to: "/contractors",
                  linktext: "Contractors",
                }
              ],
            },
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_approvals",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_approvals",
                  to: "/approvals",
                  linktext: "Approvals",
                }
              ],
            },
          ],
        };
        break;
      default:
        dashboard = {
          sidebar: [
            {
              _tag: "CSidebarNavItem",
              name: "Dashboard",
              to: "/dashboard",
              icon: "cil-speedometer",
            },
          ],
          header_nav: [
            {
              _tag: "CHeaderNavItem",
              id: "head_nav_example",
              className: "px-3",
              _children: [
                {
                  _tag: "FoxHeaderNavLink",
                  id: "head_nav_link_example",
                  to: "/",
                  linktext: "Example",
                }
              ],
            },
          ],
        };
        break;
    }
    dispatch(initiateDashboard(dashboard));

  }
}

const initiateDashboard = dashboard => ({
  type: 'INITIATE_DASHBOARD',
  sidebar: dashboard.sidebar,
  headerNav: dashboard.header_nav
})

export default getDashboardLayout