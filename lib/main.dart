import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(MusicPad());

class MusicPad extends StatelessWidget {
  void playSound(int soundNumber) {
    final AudioCache player = AudioCache();
    player.play('note$soundNumber.wav');
  }

  Expanded playKey({Color color, int soundNumber}) {
    return Expanded(
      child: FlatButton(
          color: color,
          onPressed: () {
            playSound(soundNumber);
          },
          child: null),
    );
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black26,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              playKey(color: Colors.yellow.withOpacity(0.7), soundNumber: 1),
              playKey(color: Colors.yellow.withOpacity(0.6), soundNumber: 2),
              playKey(color: Colors.yellow.withOpacity(0.5), soundNumber: 3),
              playKey(color: Colors.yellow.withOpacity(0.4), soundNumber: 4),
              playKey(color: Colors.green.withOpacity(0.7), soundNumber: 5),
              playKey(color: Colors.green.withOpacity(0.6), soundNumber: 6),
              playKey(color: Colors.green.withOpacity(0.5), soundNumber: 7),
              playKey(color: Colors.green.withOpacity(0.4), soundNumber: 8),
              playKey(color: Colors.blue.withOpacity(0.7), soundNumber: 9),
              playKey(color: Colors.blue.withOpacity(0.6), soundNumber: 10),
              playKey(color: Colors.blue.withOpacity(0.5), soundNumber: 11),
              playKey(color: Colors.blue.withOpacity(0.4), soundNumber: 12),
              playKey(color: Colors.pink.withOpacity(0.7), soundNumber: 13),
              playKey(color: Colors.pink.withOpacity(0.6), soundNumber: 14),
              playKey(color: Colors.pink.withOpacity(0.5), soundNumber: 15),
              playKey(color: Colors.pink.withOpacity(0.4), soundNumber: 16),
            ],
          ),
        ),
      ),
    );
  }
}
