/**
 * Use this namespace to reference objects in your custom component.
 * 
 * When using custom components you might have multiple instances of the
 * same custom component. When you add a custom component to an app this
 * namespace is renamed to the custom component object name in the app.
 * 
 * E.g. if the custom component object name is myCustomComponent you can call
 * functions from this namespace with myCustomComponent.foo()
 *
 */
type NavController = sap.ui.core.Control & { to?: (oContent: sap.ui.core.Control) => void };

namespace CustomComponent {
    export function renderViewAsList(oNavContainer: NavController, viewAsList: sap.m.Page, viewappName: string) {
        console.log('inside custom control renderViewAsList');

        oNavContainer.to(viewAsList);

        AppCache.Load(viewappName, {
            parentObject: viewAsList,
        });
    }

}