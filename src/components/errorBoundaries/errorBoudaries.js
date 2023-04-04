import React from "react";
import './errorBoudaries.css'

class ErrorBoundary extends React.Component {
    
    render() {
        
            return (
            <div className="error">
                Oops, something went wrong. 404 error
            </div>)
       
    }
}

export default ErrorBoundary;