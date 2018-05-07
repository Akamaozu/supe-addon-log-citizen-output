module.exports = function( supervisor ){

  supervisor.noticeboard.watch( 'citizen-output', 'pipe-to-stdout', function( msg ){
    var name = msg.notice.name,
        prefix = '[' + name + ']',
        output = msg.notice.output.trim();

    if( output[0] !== '[' ) prefix += ' ';

    console.log( prefix + output );
  });

  supervisor.noticeboard.watch( 'citizen-error', 'pipe-to-stderr', function( msg ){
    var name = msg.notice.name,
        prefix = '[' + name + ']',
        error = msg.notice.error.trim();

    if( error[0] !== '[' ) prefix += ' ';

    console.error( prefix + error );
  });
}