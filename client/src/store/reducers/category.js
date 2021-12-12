import {
  CATEGORY_TENANT,
  CATEGORY_TENANT_CREATE,
  CATEGORY_TENANT_UPDATE,
  CATEGORY_NON_TENANT,
  CATEGORY_NON_TENANT_CREATE,
  CATEGORY_NON_TENANT_UPDATE,
  SUB_CATEGORY_CREATE,
  SUB_CATEGORY_UPDATE,
  CATEGORY_DELETE_TENANT,
  CATEGORY_DELETE_NON_TENANT,
  CATEGORY_DELETE_SUB_CATEGORY,
  CATEGORY_LOADING,
  CATEGORY_ERROR,
} from "../actionType/category";

const initialState = {
  tenant: [],
  non_tenant: [],
  error: null,
  loading: false,
  successDeleted: false,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_TENANT:
      return {
        ...state,
        tenant: action.payload,
      };
    case CATEGORY_TENANT_CREATE:
      return {
        ...state,
        tenant: [...state.tenant, action.payload],
      };
    case CATEGORY_TENANT_UPDATE:
      let tenant = state.tenant.filter((el) => el.id !== action.payload.id);
      return {
        ...state,
        tenant: [...tenant, action.payload],
      };
    case CATEGORY_NON_TENANT:
      return {
        ...state,
        non_tenant: action.payload,
      };
    case CATEGORY_NON_TENANT_CREATE:
      return {
        ...state,
        non_tenant: [...state.non_tenant, action.payload],
      };
    case CATEGORY_NON_TENANT_UPDATE:
      let nonTenant = state.non_tenant.filter(
        (el) => el.id != action.payload.id
      );
      console.log(nonTenant, "masuk nonn");
      console.log([...nonTenant, action.payload]);
      return {
        ...state,
        non_tenant: [...nonTenant, action.payload],
      };
    case SUB_CATEGORY_CREATE:
      let category = [];
      state.non_tenant.forEach((el) => {
        if (el.id == action.payload.parent_id) {
          let tmp = el;
          tmp.sub_category.push(action.payload);
          category.push(tmp);
        } else {
          category.push(el);
        }
      });
      return {
        ...state,
        non_tenant: [...category],
      };
    case SUB_CATEGORY_UPDATE:
      let subCreated = state.non_tenant.filter(
        (el) => el.id != action.payload.parent_id
      );
      let index = state.non_tenant.findIndex(
        (el) => el.id == action.payload.parent_id
      );
      let tmp = state.non_tenant[index];
      let result = [];
      if (tmp.length) {
        let data = tmp.sub_category.filter((el) => el == action.payload.id);
        data.sub_category.push(action.payload);
        result.push(data);
      } else {
        tmp.sub_category.push(action.payload);
        result.push(tmp);
      }
      return {
        ...state,
        non_tenant: [...result, ...subCreated],
      };
    case CATEGORY_DELETE_TENANT:
      let tenantDeleted = state.tenant.filter((el) => el.id !== action.payload);
      return {
        ...state,
        tenant: [...tenantDeleted],
      };
    case CATEGORY_DELETE_NON_TENANT:
      let nonTenantDeleted = state.non_tenant.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        non_tenant: [...nonTenantDeleted],
      };
    case CATEGORY_DELETE_SUB_CATEGORY:
      return {
        ...state,
        successDeleted: false,
      };
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
