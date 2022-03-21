import React from 'react'
function NewComponent(OriginalComponent) {
    const NewComponent = class NewComponent extends React.Component {
        render() {
            return (<>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <OriginalComponent />
                </div>
            </>)
        }
    }

    return NewComponent
}

export default NewComponent;