export const initialState = {
  searchTerm: '',
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: true,
  search: false,
  Draggable:false,
  toggleIcon:false,
  Loading:true,
  Modal:false,
  Token:null,
  Cart:0,
  notification:null,
  notificationType:null
  
};

type ActionType =
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_STICKY' }
  | { type: 'REMOVE_STICKY' }
  | { type: 'SET_SIDEBAR_STICKY' }
  | { type: 'REMOVE_SIDEBAR_STICKY' }
  | { type: 'OpenSideBar' }
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'TOGGLE_Modal' }
  | { type: 'NotDraggable' }
  | { type: 'ToggleSearch' }
  | { type: 'NotoggleIcon' }
  | { type: 'toggleIcon' }
  | { type: 'notification',payload:string,types:string }
  | { type: 'Nonotification' }
  | { type: 'NoSearch' }
  | { type: 'Loaded' }
  | { type: 'AddToCart' }
  | { type: 'Cart' ,payload:number }
  | { type: 'setToken'; payload: string }
  | { type: 'Draggable'};

type StateType = typeof initialState;

export function appReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'setToken':
      return {
        ...state,
        searchTerm: action.payload,
      }
    case 'notification':
      return {
        ...state,
        notification: action.payload,
        notificationType:action.types
      }
    case 'Nonotification':
      return {
        ...state,
        notification: null,
      }
    case 'AddToCart':
      return {
        ...state,
        Cart: state.Cart+1,
      }
    case 'Cart' :
      return {
        ...state,
        Cart: action.payload,
      }
    case 'TOGGLE_Modal':
      return {
        ...state,
        Modal: !state.Modal,
      }; 
    case 'SET_STICKY':
      return {
        ...state,
        isSticky: true,
      };
    case 'Loaded':
      return {
        ...state,
        Loading: false,
      };
    case 'ToggleSearch':
      return {
        ...state,
        search: !state.search,
      };
    case 'toggleIcon':
      return {
        ...state,
        toggleIcon: true,
      };
    case 'NotoggleIcon':
      return {
        ...state,
        toggleIcon: false,
      };
      
    case 'NoSearch':
      return {
        ...state,
        search: false,
      };
      
    case 'REMOVE_STICKY':
      return {
        ...state,
        isSticky: false,
      };
    case 'SET_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: true,
      };
    case 'REMOVE_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: false,
      };
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
      case 'Draggable':
        return {
          ...state,
          Draggable: true,
        };
      case 'NotDraggable':
        return {
          ...state,
          Draggable: false,
        };
    case 'OpenSideBar' :
      return {
        ...state,
        isDrawerOpen: true,
      }
    default: {
      throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
