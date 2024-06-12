import React from 'react';

const UserLayout = ({ children })  => {
    return (
        <div>
            <header>User Layout Header</header>
            <main>{children}</main>
            <footer>User Layout Footer</footer>
        </div>
    );
};

export default UserLayout;