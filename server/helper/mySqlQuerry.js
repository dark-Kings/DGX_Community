export async function queryAsync(conn, query, params) {
    return new Promise((resolve, reject) => {
        conn.query(query, params, (err, results) => {
            if (err) {
                return reject(err);
            }
            // console.log(results)
            resolve(results);
        });
    });
};